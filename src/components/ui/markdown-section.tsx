interface MarkdownSectionProps {
    title: string;
    content: string;
    imageSrc?: string;
    reverse?: boolean;
    additionalImages?: string[];
}

export default function MarkdownSection({ title, content, imageSrc = "", reverse = false, additionalImages = [] }: MarkdownSectionProps) {
    // Simple markdown-style parsing
    const parseMarkdown = (text: string) => {
        // Split into lines and process each one
        const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
        
        return lines.map((line, index) => {
            // Handle bold text **text**
            const boldRegex = /\*\*(.*?)\*\*/g;
            
            // Handle bullet points
            if (line.startsWith('•')) {
                const processedLine = line.slice(1).trim().replace(boldRegex, '<strong>$1</strong>');
                return (
                    <li key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: processedLine }} />
                );
            }
            
            // Handle regular paragraphs with bold formatting
            const processedLine = line.replace(boldRegex, '<strong>$1</strong>');
            return (
                <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: processedLine }} />
            );
        });
    };

    return (
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-start mb-16 w-full`}>
            <div className={`flex-1 ${reverse ? 'md:ml-12' : 'md:mr-12'} mb-8 md:mb-0`}>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>
                <div className="text-lg prose prose-lg max-w-none dark:prose-invert">
                    <ul className="space-y-1">
                        {parseMarkdown(content)}
                    </ul>
                </div>
            </div>
            {imageSrc && (
                <div className="w-full md:w-2/5 mt-8">
                    <img src={imageSrc} alt={title} className="w-full rounded-xl" />
                    {additionalImages.map((src, index) => (
                        <img key={index} src={src} alt={`${title} - Additional Image ${index + 1}`} className="w-full rounded-xl mt-4" />
                    ))}
                </div>
            )}
        </div>
    );
}