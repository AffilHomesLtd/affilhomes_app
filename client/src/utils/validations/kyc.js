import * as yup from 'yup';

const FILE_SIZE_LIMIT = 5 * 1024 * 1024; // 5MB
const SUPPORTED_FORMATS = [
  'image/jpeg',
  'image/png',
  'image/jpg',
  'application/pdf',
];

export const kycSchema = yup.object().shape({
  bvn: yup.string().required('BVN is required'),
  nin: yup.string().required('NIN is required'),

  frontDoc: yup
    .mixed()
    .test('required', 'Front ID is required', (value) => value instanceof File)
    .test('fileSize', 'Max size is 5MB', (value) =>
      value instanceof File ? value.size <= FILE_SIZE_LIMIT : true
    )
    .test('fileType', 'Unsupported file type', (value) =>
      value instanceof File ? SUPPORTED_FORMATS.includes(value.type) : true
    ),

  backDoc: yup
    .mixed()
    .test('required', 'Back ID is required', (value) => value instanceof File)
    .test('fileSize', 'Max size is 5MB', (value) =>
      value instanceof File ? value.size <= FILE_SIZE_LIMIT : true
    )
    .test('fileType', 'Unsupported file type', (value) =>
      value instanceof File ? SUPPORTED_FORMATS.includes(value.type) : true
    ),
});
