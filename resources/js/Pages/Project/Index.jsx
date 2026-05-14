import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

function Index({auth, projects}) {
  return (
    <AuthenticatedLayout
    user={auth.user}
    header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Projects
        </h2>
    }
    >

        <Head title='Projects' />
        <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        Projects List
                        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                <tr className='text-nowrap'>
                                    <th className='px-3 py-2'>ID</th>
                                    <th className='px-3 py-2'>Name</th>
                                    {/* <th>Description</th> */}
                                    <th className='px-3 py-2'>Status</th>
                                    <th className='px-3 py-2'>Due Date</th>
                                    {/* <th className='px-3 py-2'>Image Path</th> */}
                                    <th className='px-3 py-2'>Created By</th>
                                    <th className='px-3 py-2'>Updated By</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.data.map((project) => (
                                    <tr key={project.id}>
                                        <td className='px-3 py-2'>{project.id}</td>
                                        <td className='px-3 py-2'>{project.name}</td>
                                        {/* <td>{project.description}</td> */}
                                        <td className='px-3 py-2'>{project.status}</td>
                                        <td className='px-3 py-2'>{project.due_date}</td>
                                        {/* <td className='px-3 py-2'>{project.image_path}</td> */}
                                        <td className='px-3 py-2'>{project.createdBy.name}</td>
                                        <td className='px-3 py-2'>{project.updatedBy.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}

export default Index