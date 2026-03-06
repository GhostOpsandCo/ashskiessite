import { useRef, useCallback, type CSSProperties, type KeyboardEvent } from 'react';
import { useSiteContent } from './SiteContentContext';

interface EditableTextProps {
    /** Content key in SiteContentContext */
    contentKey: string;
    /** HTML tag to render */
    as?: keyof JSX.IntrinsicElements;
    /** CSS class */
    className?: string;
    /** Inline style */
    style?: CSSProperties;
    /** Children are ignored — content comes from context */
    children?: never;
}

export function EditableText({
    contentKey,
    as: Tag = 'span',
    className = '',
    style,
}: EditableTextProps) {
    const { get, set, isEditMode } = useSiteContent();
    const ref = useRef<HTMLElement>(null);
    const value = get(contentKey);

    const handleBlur = useCallback(() => {
        if (ref.current) {
            const newText = ref.current.innerText.trim();
            if (newText !== value) {
                set(contentKey, newText);
            }
        }
    }, [contentKey, value, set]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            ref.current?.blur();
        }
    }, []);

    const Component = Tag as any;

    if (!isEditMode) {
        return (
            <Component className={className} style={style}>
                {value}
            </Component>
        );
    }

    return (
        <Component
            ref={ref}
            className={`${className} editable-text`}
            style={{
                ...style,
                outline: 'none',
                cursor: 'text',
            }}
            contentEditable
            suppressContentEditableWarning
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            spellCheck={false}
        >
            {value}
        </Component>
    );
}
