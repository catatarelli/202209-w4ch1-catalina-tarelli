interface InfoProps {
  number: number;
}

const Info = ({ number }: InfoProps): JSX.Element => {
  return (
    <section className="controls">
      <p className="info">{number} gentlemen pointing at you</p>
    </section>
  );
};

export default Info;
