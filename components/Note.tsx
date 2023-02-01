import { Listbox, Transition } from '@headlessui/react'
import {
  FaceFrownIcon,
  FaceSmileIcon as FaceSmileIconMini,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import { FaceSmileIcon as FaceSmileIconOutline } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import MkBorder from './layout/MkBorder'

const moods = [
  {
    name: 'Excited',
    value: 'excited',
    icon: FireIcon,
    iconColor: 'text-white',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Loved',
    value: 'loved',
    icon: HeartIcon,
    iconColor: 'text-white',
    bgColor: 'bg-pink-400',
  },
  {
    name: 'Happy',
    value: 'happy',
    icon: FaceSmileIconMini,
    iconColor: 'text-white',
    bgColor: 'bg-green-400',
  },
  {
    name: 'Sad',
    value: 'sad',
    icon: FaceFrownIcon,
    iconColor: 'text-white',
    bgColor: 'bg-yellow-400',
  },
  {
    name: 'Thumbsy',
    value: 'thumbsy',
    icon: HandThumbUpIcon,
    iconColor: 'text-white',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'I feel nothing',
    value: null,
    icon: XMarkIcon,
    iconColor: 'text-gray-400',
    bgColor: 'bg-transparent',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
type NoteProps = {
  date: Date
  note: string
}

export default function Note(props: NoteProps) {
  const [selected, setSelected] = useState(moods[5])
  const weekday = props.date.toLocaleDateString('en-GB', { weekday: 'short' })
  const date = props.date.toLocaleDateString('en-GB', {
    month: 'long',
    day: 'numeric',
  })
  const year = props.date.getFullYear()

  return (
    <div className='mb-12 flex items-start space-x-8 last:mb-0'>
      <div className='flex flex-shrink-0 flex-col text-center sm:mr-2'>
        <span className='block text-3xl font-extrabold uppercase'>
          {weekday}
        </span>
        <span className='text-sm font-medium uppercase opacity-50'>
          {date}
          <br />
          {year}
        </span>
      </div>
      <div className='min-w-0 flex-1'>
        <div className=''>
          <label className='sr-only'>Add your note</label>
          <div
            contentEditable='true'
            className='mt-0 mb-6 block  min-h-min w-full border-0 outline-0 placeholder:text-gray-300 focus:border-0 focus:ring-0 sm:text-xl'
          >
            {props.note}
          </div>
        </div>
        <MkBorder />
        <div className='ml-2 mt-2 flex justify-between pt-2'>
          <div className='flex items-center space-x-5'>
            <div className='flow-root'>
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <Listbox.Label className='sr-only'>
                      {' '}
                      Your mood{' '}
                    </Listbox.Label>
                    <div className='relative'>
                      <Listbox.Button className='relative -m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500'>
                        <span className='flex items-center justify-center'>
                          {selected.value === null ? (
                            <span>
                              <FaceSmileIconOutline
                                className='h-6 w-6 flex-shrink-0'
                                aria-hidden='true'
                              />
                              <span className='sr-only'> Add your mood </span>
                            </span>
                          ) : (
                            <span>
                              <span
                                className={classNames(
                                  selected.bgColor,
                                  'flex h-8 w-8 items-center justify-center rounded-full'
                                )}
                              >
                                <selected.icon
                                  className='h-5 w-5 flex-shrink-0 text-white'
                                  aria-hidden='true'
                                />
                              </span>
                              <span className='sr-only'>{selected.name}</span>
                            </span>
                          )}
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        <Listbox.Options className='absolute z-10 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm'>
                          {moods.map((mood) => (
                            <Listbox.Option
                              key={mood.value}
                              className={({ active }) =>
                                classNames(
                                  active ? 'bg-gray-100' : 'bg-white',
                                  'relative cursor-default select-none py-2 px-3'
                                )
                              }
                              value={mood}
                            >
                              <div className='flex items-center'>
                                <div
                                  className={classNames(
                                    mood.bgColor,
                                    'flex h-8 w-8 items-center justify-center rounded-full'
                                  )}
                                >
                                  <mood.icon
                                    className={classNames(
                                      mood.iconColor,
                                      'h-5 w-5 flex-shrink-0'
                                    )}
                                    aria-hidden='true'
                                  />
                                </div>
                                <span className='ml-3 block truncate font-medium'>
                                  {mood.name}
                                </span>
                              </div>
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
