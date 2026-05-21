import { X } from "lucide-react";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ModalForm({ isOpen, onClose }) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    // Clear previous error for this field
    delete newErrors[name];

    switch (name) {
      case "nome":
        // Allow only letters (including accents) and spaces
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
        if (!value.trim()) {
          newErrors.nome = "Nome é obrigatório";
        } else if (!nameRegex.test(value)) {
          newErrors.nome = "Nome deve conter apenas letras e espaços";
        } else if (value.trim().length < 2) {
          newErrors.nome = "Nome deve ter pelo menos 2 caracteres";
        }
        break;

      case "email":
        // Standard email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = "E-mail é obrigatório";
        } else if (!emailRegex.test(value)) {
          newErrors.email = "E-mail inválido";
        }
        break;

      case "telefone":
        // Remove all non-digits for validation
        const phoneDigits = value.replace(/\D/g, "");
        if (!value.trim()) {
          newErrors.telefone = "Telefone é obrigatório";
        } else if (phoneDigits.length < 10 || phoneDigits.length > 11) {
          newErrors.telefone =
            "Telefone deve ter 10 ou 11 dígitos (DDD + número)";
        }
        break;

      case "mensagem":
        if (!value.trim()) {
          newErrors.mensagem = "Mensagem é obrigatória";
        } else if (value.trim().length < 10) {
          newErrors.mensagem = "Mensagem deve ter pelo menos 10 caracteres";
        }
        break;
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Erro claro quando o usuário começa a digitar
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar todos os campos
    const allErrors = {};
    Object.keys(formData).forEach((key) => {
      const fieldErrors = validateField(key, formData[key]);
      Object.assign(allErrors, fieldErrors);
    });

    // Se houver erros, pare o envio e mostre-os
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      return;
    }

    setIsSubmitting(true);

    // Trava de segurança: verifica se executeRecaptcha está disponível
    if (!executeRecaptcha) {
      console.error("reCAPTCHA não está disponível");
      setIsSubmitting(false);
      return;
    }

    try {
      // Gerar token reCAPTCHA v3
      const token = await executeRecaptcha("submit_form");

      // Adicionar token aos dados do formulário
      const dataWithRecaptcha = {
        ...formData,
        recaptchaToken: token,
      };

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwnKZc0UMXE3Kf-1k796_DpPqyab6mut_A9JbQd0WLscGU9-9lEMKAYgFq2MuVmgGHnaw/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(dataWithRecaptcha),
        },
      );

      // Extrair JSON da resposta do backend
      const dados = await response.json();

      // Verificar status retornado pelo servidor
      if (dados.status === "error") {
        // Tratamento de erro do backend
        setIsSubmitting(false);
        // Exibir erro para o usuário
        setErrors({
          submit:
            dados.message ||
            "Ocorreu um erro ao enviar o formulário. Tente novamente.",
        });
        // Registrar erro técnico no console
        console.error("Erro do backend:", dados);
      } else if (dados.status === "success") {
        // Fluxo de sucesso existente
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          mensagem: "",
        });
        setErrors({});

        // Ocultar mensagem de sucesso após 3 segundos
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="bg-black/50 inset-0 fixed z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>

        {/* Form Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Agendar Consulta
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              maxLength={50}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                errors.nome ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Seu nome completo"
            />
            {errors.nome && (
              <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={100}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="telefone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              maxLength={15}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                errors.telefone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="(00) 00000-0000"
            />
            {errors.telefone && (
              <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="mensagem"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              rows={4}
              maxLength={500}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none ${
                errors.mensagem ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Descreva sua necessidade ou motivo da consulta..."
            />
            {errors.mensagem && (
              <p className="text-red-500 text-sm mt-1">{errors.mensagem}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? "Enviando..." : "Enviar Agendamento"}
          </button>

          {/* Success Message */}
          {isSuccess && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mt-4 text-center">
              Sucesso! Agendamento enviado.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
