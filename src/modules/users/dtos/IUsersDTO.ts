import IBaseDTOAndRequest from '@shared/dtos/IBaseDTOAndRequest';

type IUsersDTO = Omit<IBaseDTOAndRequest, 'id' | 'is_active'>;

export default IUsersDTO;
