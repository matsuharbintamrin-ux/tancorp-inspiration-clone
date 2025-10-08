import imageSectionBg from "@/assets/image-section-bg.jpg";

const TancorpImageSection = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageSectionBg})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>
    </section>
  );
};

export default TancorpImageSection;
