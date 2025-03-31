const whatsappNumber = "+6281802103529";
const whatsappMessage = "Hello, I would like to make a reservation!";

export const handleWhatsAppRedirect = () => {
  const url = `https://wa.me/${whatsappNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, "_blank");
};
