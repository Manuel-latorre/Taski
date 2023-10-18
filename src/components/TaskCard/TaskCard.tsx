'use client'

import { useRouter } from 'next/navigation'; // Cambio en la importación
import style from './TaskCard.module.css'

type Task = {
  id: number
  title: string
  description: string | null
  createdAt: Date
};

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const router = useRouter();

  return (
      <div className={style.card} onClick={() => {
        router.push(`/tasks/edit/${task.id}`);
      }}>
        <p>{task.title}</p>
        <p>{task.description}</p>
        <p>{new Date(task.createdAt).toLocaleDateString()}</p>
      </div>
    
  );
}

export default TaskCard;
