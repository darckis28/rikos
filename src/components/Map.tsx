import Title from "./Title";

const Map = () => {
  return (
    <div className="w-full px-10 mb-8">
      <Title center>Nuestra ubicacion</Title>
      <iframe
        className="mx-auto aspect-video w-full border-2"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d245.636166525847!2d-76.23486755987005!3d-9.919073497875702!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c30518fd8093%3A0x5c66dc1884b0403d!2sJr.%20Abtao%201844%2C%20Hu%C3%A1nuco%2010001!5e0!3m2!1ses!2spe!4v1743002506642!5m2!1ses!2spe"
        loading="lazy"
      ></iframe>
    </div>
  );
};
export default Map;
