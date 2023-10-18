'use client'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import style from './NewTask.module.css'

interface NewPageProps {
    params: {
      id: string | undefined; // Cambia 'id' a un tipo adecuado si no es una cadena
    };
  }


    export default function NewPage ({ params }: NewPageProps) {


    const router =  useRouter()
    const [title, setTitle]  = useState('')
    const [description, setDescription] =  useState('')

    useEffect(() => {
        if(params.id){
            fetch(`/api/tasks/${params.id}`)
            .then(res => res.json())
            .then((data) => {
            setTitle(data.title)
            setDescription(data.description)
            })
        }
    }, [])



    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!title || !description) {
            // Validación simple para asegurarse de que los campos no estén vacíos
            alert('Por favor, llene todos los campos.');
            return;
          }
        if(params.id){
            const res =  await fetch(`/api/tasks/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({title, description}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
        }else{
            const res = await fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify({title, description}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
        }
        router.refresh()
        router.push('/')
    }

    async function deleteTask () {
        const res = await fetch(`/api/tasks/${params.id}`, {
            method: 'DELETE'
        })
        const data = await res.json()
        router.refresh()
        router.push('/')
    }


    return (
        
            <div className={style.formContainer}>
                <form className={style.form} onSubmit={onSubmit}>
                    <div style={{display:'flex', flexDirection:'column', marginBottom:25}}>
                        <label className={style.label} htmlFor="title">Title of task</label>
                        <input className={style.inputs} id='title' type="text" placeholder='Task...'  onChange={(event) => setTitle(event.target.value)} value={title} required/>
                    </div>

                    <div style={{display:'flex', flexDirection:'column', marginBottom:25}}>
                        <label className={style.label} htmlFor="description">Description of task</label>
                        <textarea className={style.textArea} id='description'  placeholder='Write your task...' onChange={(event) => setDescription(event.target.value)} value={description} required></textarea>
                    </div>

                    <div className={style.sectionBtns}>
                        {
                            params.id && (
                                <button className={style.delete} type='button' onClick={deleteTask}>DELETE</button>
                            )
                        }

                        <button className={style.create}>Create</button>

                    </div>
                </form>
            </div>

        
    )
}