import { useRef, useState, useCallback, type CSSProperties, type DragEvent } from 'react';
import { useSiteContent } from './SiteContentContext';
import { Upload } from 'lucide-react';

interface EditableImageProps {
    /** Content key in SiteContentContext */
    contentKey: string;
    /** Alt text */
    alt?: string;
    /** CSS class for the <img> */
    className?: string;
    /** Inline style for the <img> */
    style?: CSSProperties;
}

export function EditableImage({
    contentKey,
    alt = '',
    className = '',
    style,
}: EditableImageProps) {
    const { get, set, isEditMode } = useSiteContent();
    const fileRef = useRef<HTMLInputElement>(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [imgError, setImgError] = useState(false);
    const src = get(contentKey);

    const readFile = useCallback(
        (file: File) => {
            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    set(contentKey, reader.result);
                    setImgError(false);
                }
            };
            reader.readAsDataURL(file);
        },
        [contentKey, set],
    );

    const handleDrop = useCallback(
        (e: DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragOver(false);
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                readFile(file);
            }
        },
        [readFile],
    );

    const handleDragOver = useCallback((e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(true);
    }, []);

    const handleDragLeave = useCallback((e: DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
    }, []);

    const handleClick = useCallback((e: React.MouseEvent) => {
        if (isEditMode) {
            e.preventDefault();
            e.stopPropagation();
            fileRef.current?.click();
        }
    }, [isEditMode]);

    const handleFileChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                readFile(file);
                // Reset input so same file can be re-selected
                e.target.value = '';
            }
        },
        [readFile],
    );

    const handleImgError = useCallback(() => setImgError(true), []);

    // Error fallback SVG
    const ERROR_IMG =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

    const resolvedSrc = imgError ? ERROR_IMG : src;

    // Not in edit mode — render a plain image
    if (!isEditMode) {
        return (
            <img
                src={resolvedSrc}
                alt={alt}
                className={className}
                style={style}
                onError={handleImgError}
                draggable={false}
            />
        );
    }

    // Edit mode — wrap in a positioned container with overlay
    return (
        <div
            className="editable-image-wrap"
            style={{ position: 'relative', width: '100%', height: '100%' }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={handleClick}
        >
            <img
                src={resolvedSrc}
                alt={alt}
                className={className}
                style={style}
                onError={handleImgError}
                draggable={false}
            />

            <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />

            {/* Overlay — always visible in edit mode, stronger on drag */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isDragOver ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.0)',
                    border: '2px dashed rgba(59, 130, 246, 0.4)',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease',
                    zIndex: 10,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.35)'; }}
                onMouseLeave={(e) => { if (!isDragOver) (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.0)'; }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'white',
                        opacity: isDragOver ? 1 : 0,
                        transition: 'opacity 0.2s ease',
                        pointerEvents: 'none',
                    }}
                    className="editable-image-hint"
                >
                    <Upload style={{ width: '2rem', height: '2rem' }} />
                    <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-sans)' }}>
                        {isDragOver ? 'Drop image' : 'Click or drag to replace'}
                    </span>
                </div>
            </div>
        </div>
    );
}
