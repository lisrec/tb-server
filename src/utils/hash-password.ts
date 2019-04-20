import * as crypto from 'crypto';
export const hashPassword = pass =>
	crypto
		.createHash('sha256')
		.update(pass)
		.digest('hex');
