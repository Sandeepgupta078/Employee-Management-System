import React from 'react'
import AcceptTask from './acceptTask'
import NewTask from './newTask'
import CompleteTask from './completeTask'
import FailedTask from './failedTask'

const TaskList = ({data}) => {
return (
    <div id='taskList' className='h-[55%] flex items-center justify-start gap-5 mt-10 flex-nowrap w-full py-5 overflow-x-auto'>
        {data.tasks.map((elem,index) => {
            if(elem.active){
                return <AcceptTask key={index} data={elem} />
            }
            if(elem.newTask){
                return <NewTask key={index} data={elem} />
            }
            if(elem.completed){
                return <CompleteTask key={index} data={elem} />
            }
            if(elem.failed){
                return <FailedTask key={index } data={elem} />
            }
        })}        
    </div>
)
}

export default TaskList