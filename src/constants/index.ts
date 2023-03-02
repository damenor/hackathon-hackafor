import { ECreatorSocialType } from '@/types'

export const TWITCH_PARENT = process.env.ENV === 'development' ? 'localhost' : 'education4.dev&parent=www.education4.dev' 

export const CREATOR_CATEGORIES = ['backend', 'ciberseguridad', 'cloud', 'database', 'datascience', 'frontend', 'mobile', 'uiux']

export const CREATOR_SOCIAL = {
  discord: { label: 'Discord', icon: '', value: ECreatorSocialType.Discord },
  github: { label: 'Github', icon: '', value: ECreatorSocialType.Github },
  instagram: { label: 'Instagram', icon: '', value: ECreatorSocialType.Instagram },
  tiktok: { label: 'Tiktok', icon: '', value: ECreatorSocialType.Tiktok },
  twitch: { label: 'Twitch', icon: '', value: ECreatorSocialType.Twitch },
  twitter: { label: 'Twitter', icon: '', value: ECreatorSocialType.Twitter },
  youtube: { label: 'Youtube', icon: '', value: ECreatorSocialType.Youtube },
}

// export const USER_ROLES = [
//   { label: 'Administrador', type: EUserRole.ADMIN },
//   { label: 'Colaborador', type: EUserRole.COLLABORATOR },
//   { label: 'Usuario', type: EUserRole.USER },
// ]
