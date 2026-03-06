import { useRef, useCallback } from 'react';
import { Pencil, Check, Download, Upload, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useSiteContent } from './SiteContentContext';

export function EditModePanel() {
    const { isEditMode, toggleEditMode, exportJSON, importJSON, resetAll } = useSiteContent();
    const fileRef = useRef<HTMLInputElement>(null);

    const handleImport = useCallback(() => {
        fileRef.current?.click();
    }, []);

    const handleFileChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    importJSON(reader.result);
                }
            };
            reader.readAsText(file);
            e.target.value = '';
        },
        [importJSON],
    );

    const handleReset = useCallback(() => {
        if (window.confirm('Reset all content to defaults? This cannot be undone.')) {
            resetAll();
        }
    }, [resetAll]);

    return (
        <>
            <input
                ref={fileRef}
                type="file"
                accept=".json"
                onChange={handleFileChange}
                className="hidden"
            />

            <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
                {/* Expanded controls — only visible in edit mode */}
                <AnimatePresence>
                    {isEditMode && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            transition={{ duration: 0.25 }}
                            className="flex flex-col gap-2"
                        >
                            {/* Export */}
                            <button
                                onClick={exportJSON}
                                className="edit-panel-btn group"
                                title="Export content as JSON"
                            >
                                <Download className="w-4 h-4" />
                                <span className="edit-panel-label">Export</span>
                            </button>

                            {/* Import */}
                            <button
                                onClick={handleImport}
                                className="edit-panel-btn group"
                                title="Import content from JSON"
                            >
                                <Upload className="w-4 h-4" />
                                <span className="edit-panel-label">Import</span>
                            </button>

                            {/* Reset */}
                            <button
                                onClick={handleReset}
                                className="edit-panel-btn group hover:!border-red-400/60"
                                title="Reset all content to defaults"
                            >
                                <RotateCcw className="w-4 h-4" />
                                <span className="edit-panel-label">Reset</span>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main toggle button */}
                <motion.button
                    onClick={toggleEditMode}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all ${isEditMode
                            ? 'bg-white text-black border-2 border-black'
                            : 'bg-black/80 text-white border border-white/20 hover:bg-black'
                        }`}
                    style={{ backdropFilter: 'blur(12px)', fontFamily: 'var(--font-sans)' }}
                    title={isEditMode ? 'Exit edit mode' : 'Enter edit mode'}
                >
                    {isEditMode ? <Check className="w-5 h-5" /> : <Pencil className="w-5 h-5" />}
                </motion.button>
            </div>
        </>
    );
}
