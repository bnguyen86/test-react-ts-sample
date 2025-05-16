import { useState } from "react";

export default function useFormEntry<T>(initialValue: T) {
    const [formEntry, setFormEntry] = useState<T>(initialValue);
    const [isDirty, setIsDirty] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>) => {
        setFormEntry({ ...formEntry, [(event.target as HTMLInputElement).name]:( event.target as HTMLInputElement).value });
        setIsDirty(true);
    };

    const resetForm = () => {
        setFormEntry(initialValue);
        setIsDirty(false);
    };

    return { formEntry, handleChange, isDirty, resetForm };
}