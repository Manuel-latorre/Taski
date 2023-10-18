import { prisma } from "../libs/prisma"
import styles from './page.module.css'
import TaskCard from "../components/TaskCard/TaskCard"

async function loadTasks(){
  return await prisma.task.findMany()
}


export default async function HomePage() {

  const tasks = await loadTasks()

  return (
    <div className={styles.container}>
      {
        tasks.map(task => (
          <TaskCard task={task} key={task.id}/>
        ))
      }
    </div>
  )
}