interface SectionProps {
  icon: string;
  text: string;
  description: string;
}

const IconSection: React.FC<SectionProps> = (props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center max-w-screen-md text-center md:text-left">
        <div className="min-w-max">
          <img src={props.icon} alt="SA Icon" className="w-20 h-28" />
        </div>
        <div className="flex flex-col p-5">
          <h2 className="text-3xl font-bold text-blue-900 py-3">
            {props.text}
          </h2>
          <p className="text-gray-600">{props.description}</p>
        </div>
      </div>
    </>
  );
};
export default IconSection;
