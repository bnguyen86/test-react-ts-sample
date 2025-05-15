import { useState } from "react";

export default function useFormEntry<T>(initialValue: T) {
    const [formEntry, setFormEntry] = useState<T>(initialValue);
    const [isDirty, setIsDirty] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormEntry({ ...formEntry, [event.target.name]: event.target.value });
        setIsDirty(true);
    };

    const resetForm = () => {
        setFormEntry(initialValue);
        setIsDirty(false);
    };

    return { formEntry, handleChange, isDirty, resetForm };
}