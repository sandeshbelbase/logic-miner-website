export default function ProjectCard({ image, title, description }) {
  return (
    <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
      <img src={image} alt={title} className="rounded-md mb-4 w-full h-40 object-cover" />
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
}
