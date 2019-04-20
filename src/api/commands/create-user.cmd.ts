export class CreateUserCmd {
	constructor(
		public readonly login: string,
		public readonly password: string,
		public readonly displayName: string,
	) {}
}
