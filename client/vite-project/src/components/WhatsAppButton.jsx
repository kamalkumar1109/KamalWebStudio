import { WhatsAppOutlined } from '@ant-design/icons';

const WHATSAPP_NUMBER = '+917015550728'; // replace with your number in international format

export function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Kamal,%20I%20want%20a%20website%20for%20my%20business.`;

  return (
    <a href={url} target="_blank" rel="noreferrer" className="whatsapp-floating-button">
      <WhatsAppOutlined />
    </a>
  );
}

