import IBaseDTOAndRequest from '@shared/dtos/IBaseDTOAndRequest';

export interface IProfileFactoryDTO extends Omit<IBaseDTOAndRequest, 'id' | 'is_active'> { }
