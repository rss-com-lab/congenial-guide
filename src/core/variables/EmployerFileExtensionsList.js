import mime from 'mime';

const EmployerAllowFileExtension = [
    'xlsx',
];

const EmployerAllowFileMimeTypes = () => EmployerAllowFileExtension
    .map(fileExt => mime.getType(fileExt));

export { EmployerAllowFileExtension, EmployerAllowFileMimeTypes };
