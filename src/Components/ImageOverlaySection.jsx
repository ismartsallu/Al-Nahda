export default function ImageOverlaySection({
  image,
  height = "h-[400px] md:h-[500px]",
  overlay = "bg-black/60",
}) {
  return (
    <section className={`relative w-full ${height} overflow-hidden`}>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover md:bg-fixed"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlay}`}></div>

    </section>
  );
}