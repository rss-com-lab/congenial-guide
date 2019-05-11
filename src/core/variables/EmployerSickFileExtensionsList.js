import mime from 'mime';

const EmployerSickAllowFileExtension = [
    'xlsx',
];

const EmployerSickAllowFileMimeTypes = () => EmployerSickAllowFileExtension
    .map(fileExt => mime.getType(fileExt));

export { EmployerSickAllowFileExtension, EmployerSickAllowFileMimeTypes };
