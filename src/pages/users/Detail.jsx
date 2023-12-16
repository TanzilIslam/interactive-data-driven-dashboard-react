import { PaperClipIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { userDetail } from '../../data/users'

const DetailItem = ({ label, value }) => (
  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-gray-900 dark:text-white">
    <dt className="text-sm font-medium leading-6">{label}</dt>
    <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">{value}</dd>
  </div>
)

const AttachmentItem = ({ fileName, fileSize }) => (
  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6 text-gray-700 dark:text-white">
    <div className="flex w-0 flex-1 items-center">
      <PaperClipIcon
        className="h-5 w-5 flex-shrink-0 text-indigo-500"
        aria-hidden="true"
      />
      <div className="ml-4 flex min-w-0 flex-1 gap-2">
        <span className="truncate font-medium">{fileName}</span>
        <span className="flex-shrink-0">{fileSize}</span>
      </div>
    </div>
    <div className="ml-4 flex-shrink-0">
      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
        Download
      </a>
    </div>
  </li>
)

export default function Detail() {
  const details = [
    ...userDetail,
    {
      label: 'Attachments',
      value: (
        <ul
          role="list"
          className="divide-y divide-gray-100 rounded-md border border-gray-200 dark:dark:border-indigo-300 dark:text-white"
        >
          <AttachmentItem fileName="demo.pdf" fileSize="2.4mb" />
          <AttachmentItem
            fileName="coverletter_frontend_end_developer.pdf"
            fileSize="4.5mb"
          />
        </ul>
      ),
    },
  ]

  return (
    <div>
      <Link to="/users">
        <ArrowLeftIcon className="h-6 w-g text-indigo-500 mb-4" />
      </Link>
      <div className="px-4 sm:px-0 text-gray-900 dark:text-white">
        <h3 className="text-base font-semibold leading-7">
          Applicant Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6">
          Personal details and application.
        </p>
      </div>
      <div className="mt-6 border-t dark:border-indigo-300 border-slate-300 ">
        <dl className="">
          {details.map((detail, index) => (
            <DetailItem key={index} label={detail.label} value={detail.value} />
          ))}
        </dl>
      </div>
    </div>
  )
}
