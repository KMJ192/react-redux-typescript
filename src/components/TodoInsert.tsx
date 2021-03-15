import React, { FormEvent, useState } from 'react'

interface TodoInsertProps{
    onInsert: (text: string) => void;
}

function TodoInsert({onInsert} : TodoInsertProps) {
    //input값 관리
    const [value, setValue] = useState('');
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const onSubmit = (e: FormEvent) =>{
        e.preventDefault();
        onInsert(value);
        setValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="Input todo"
                value={value}
                onChange={onChange}
            />
            <button type="submit">등록</button>
        </form>
    )
}

export default TodoInsert;
