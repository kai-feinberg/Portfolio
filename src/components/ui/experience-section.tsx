
export default function Section({ title, content, imageSrc, reverse = false }: { title: string; content: string; imageSrc: string, reverse?: boolean }) {
    return (
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-start mb-16 w-full`}>
            <div className={`flex-1 ${reverse ? 'md:ml-12' : 'md:mr-12'} mb-8 md:mb-0`}>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>
                <p className="text-lg whitespace-pre-line">{content}</p>
            </div>
            <div className="w-full md:w-2/5">
                <img src={imageSrc} alt={title} className="w-full rounded-xl" />
            </div>
        </div>
    );
}