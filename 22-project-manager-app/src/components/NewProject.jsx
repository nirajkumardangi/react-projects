import { Check, FormInput, X } from 'lucide-react';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';

function NewProject({ projects, setProjects }) {
  const [data, setData] = useState({
    title: '',
    description: '',
    dueDate: '',
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSaveProject() {
    // validation
    const newErrors = {};
    if (!data.title) newErrors.title = 'Title is required';
    if (!data.description) newErrors.description = 'Description is required';
    if (!data.dueDate) newErrors.dueDate = 'Due date is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Add new project
    const newProject = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      tasks: [],
    };

    setProjects([...projects, newProject]);
    setData({ title: '', description: '', dueDate: '' });
    setErrors({});
  }

  console.log('Data: ', data);
  console.log('Projects', projects);

  return (
    <div className='flex-1 p-8 flex items-center justify-center bg-gray-50'>
      <div className='bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>
          Create New Project
        </h2>

        <Input
          label='Title'
          name='title'
          placeholder='Enter project title'
          value={data.title}
          onChange={handleChange}
          error={errors.title}
        />

        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            Description
          </label>
          <textarea
            name='description'
            value={data.description}
            onChange={handleChange}
            placeholder='Enter project description'
            rows='4'
            className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 transition ${
              errors.description
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            }`}
          />
          {errors.description && (
            <p className='text-red-500 text-sm mt-1'>{errors}</p>
          )}
        </div>

        <Input
          label='Due Date'
          type='date'
          name='dueDate'
          placeholder='Enter project title'
          value={data.dueDate}
          onChange={handleChange}
          error={errors.dueDate}
        />

        <div className='flex gap-3 mt-6'>
          <Button onClick={handleSaveProject} variant='success' icon={Check}>
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
