import IBaseDTOAndRequest from '@shared/dtos/IBaseDTOAndRequest';

type IProfilesDTO = Omit<IBaseDTOAndRequest, 'id' | 'is_active'>;

export default IProfilesDTO;
