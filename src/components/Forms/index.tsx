import { Input } from '@/components';

export const Forms = () => {
  return (
    <form className="form animate__animated animate__fadeIn">
      <Input label="Nome" />
      <Input label="Email" />
      <Input label="Mensagem" textarea={true} />

      <button type='submit' className='btn-default btn-contact'>Enviar</button>
    </form>
  );
};
