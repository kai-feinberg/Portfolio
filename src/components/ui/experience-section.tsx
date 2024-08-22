
export default function Section({ title, content, imageSrc="", reverse = false, additionalImages = [] }: { title: string; content: string; imageSrc?: string, reverse?: boolean, additionalImages?: string[] }) {
    return (
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-start mb-16 w-full`}>
            <div className={`flex-1 ${reverse ? 'md:ml-12' : 'md:mr-12'} mb-8 md:mb-0`}>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>
                <p className="text-lg whitespace-pre-line">{content}</p>
            </div>
            <div className="w-full md:w-2/5 mt-8">
                <img src={imageSrc} alt={title} className="w-full rounded-xl" />
                {additionalImages.map((src, index) => (
                    <img key={index} src={src} alt={`${title} - Additional Image ${index + 1}`} className="w-full rounded-xl mt-4" />
                ))}
            </div>
        </div>
    );
}