export class UpdateProfileDto {
  address?: string;
  contacts?: { type: string; value: string }[];
  emergencyContacts?: { name: string; relation: string; phone: string }[];
}
