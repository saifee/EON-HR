import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentService {
  list(tenantId: string) {
    return [
      { id: 'd1', name: 'Offer Letter', status: 'signed', storage: 's3', tenantId },
      { id: 'd2', name: 'NDA', status: 'pending_signature', storage: 's3', tenantId },
    ];
  }
}
