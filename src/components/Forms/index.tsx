import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface IData {
  name: string;
  email: string;
  message: string;
}

export const Forms = () => {
  const formSchema = yup.object().shape({
    name: yup.string(),
    email: yup
      .string()
      .matches(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i, 'E-mail inválido'),
    message: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({ resolver: yupResolver(formSchema) });

  const SendWhatsAppMessage = (data: IData) => {
    const url = `https://api.whatsapp.com/send?phone=5521987485529&text=`;
    const message = `
    *MENSAGEM ENVIADA PELO SITE*%0A%0A
    *Nome:* ${data.name}%0A
    *Email:* ${data.email}%0A
    *Mensagem:* ${data.message}%0A
    `;
    window.open(`${url}${message}`, '_blank');
  };

  return (
    <form
      className="form animate__animated animate__fadeIn"
      onSubmit={handleSubmit(SendWhatsAppMessage)}
    >
      <div className="input-group">
        <input
          id="name"
          required
          className="input"
          autoComplete="off"
          {...register('name')}
        />
        <label className="user-label">Digite seu nome</label>
      </div>

      <div className="input-group">
        <input
          required
          className="input"
          autoComplete="off"
          {...register('email')}
        />
        <label className="user-label">Digite seu e-mail</label>
        {<p>{errors.email?.message}</p>}
      </div>

      <div className="input-group">
        <textarea
          required
          className="textarea"
          autoComplete="off"
          {...register('message')}
        />
        <label className="user-label">Digite sua mensagem</label>
      </div>

      <button type="submit" className="btn-default btn-contact">
        Enviar
      </button>
    </form>
  );
};
