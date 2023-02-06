import "./Contact.css";
import form from "./img/form.png";
import * as ImIcon from "react-icons/im";
import * as AiIcon from "react-icons/ai";
import * as BsIcon from "react-icons/bs";

export default function Contact() {
  return (
    <div>
        <div className="container-form">
        <div className="footer-text">
            <h2>Não hesite em entrar em contato. Será um prazer contribuir para o sucesso do seu projeto.</h2>
          </div>
          <form
            className="form"
            action="https://api.staticforms.xyz/submit"
            method="post"
          >
            <h2 id="contact">Fomulário para contato</h2>
            <div className="sigle-input">
              <input
                type="text"
                name="name"
                required
                className="input"
                id="nome"
              />
              <label htmlFor="nome">Nome</label>
            </div>
            <div className="sigle-input">
              <input
                type="text"
                name="email"
                required
                className="input"
                id="email"
              />
              <label htmlFor="email">Email</label>
            </div>
            <textarea
              name="message"
              required
              className="textarea"
              placeholder="Digite a sua mensagem"
            />
            <input
              type="hidden"
              name="accessKey"
              value="a90e6195-838c-47e5-90c0-80ba0cda36fd"
            ></input>
            <input
              type="hidden"
              name="redirectTo"
              value="https://agostinho-portfolio.vercel.app/#"
            ></input>
            <button>Enviar</button>
          </form>
          <div className="links-contact">
            <a href="https://www.linkedin.com/in/lucasbelgamann/" target="_blank" rel="noreferrer">
              <ImIcon.ImLinkedin />
            </a>
            <a href="https://github.com/LucasBelgamann" target="_blank" rel="noreferrer">
              <AiIcon.AiFillGithub className="github" />
            </a>
            <a href="https://www.instagram.com/lucasag0stinh0/" target="_blank" rel="noreferrer">
              <BsIcon.BsInstagram />
            </a>
          </div>
        </div>
      <div className="developer">
        <span>Developed by Lucas Agostinho</span>
      </div>
    </div>
  );
}
