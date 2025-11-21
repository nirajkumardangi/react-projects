import { Check, X } from "lucide-react";
import Input from "./Input";
import Button from "./Button";

function NewProject() {
  return (
    <div className='flex-1 p-8 flex items-center justify-center bg-gray-50'>
      <div className='bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>
          Create New Project
        </h2>

        <Input label='Title' placeholder='Enter project title' />

        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            Description
          </label>
          <textarea
            placeholder='Enter project description'
            rows='4'
            className='w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        <Input label='Due Date' type='date' />

        <div className='flex gap-3 mt-6'>
          <Button variant='success' icon={Check}>
            Save Project
          </Button>
          <Button variant='secondary' icon={X}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewProject;
