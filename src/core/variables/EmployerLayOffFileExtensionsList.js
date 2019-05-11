import mime from 'mime';

const EmployerLayOffAllowFileExtension = [
    'xlsx',
];

const EmployerLayOffAllowFileMimeTypes = () => EmployerLayOffAllowFileExtension
    .map(fileExt => mime.getType(fileExt));

export { EmployerLayOffAllowFileExtension, EmployerLayOffAllowFileMimeTypes };
