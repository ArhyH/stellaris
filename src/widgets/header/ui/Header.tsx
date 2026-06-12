import { colors } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { RouterLink, routerLinkProps } from '@/shared/ui/RouterLink';
import styles from './style.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <RouterLink to={'/settings'} theme={routerLinkProps.themes.green}>
        <Typography
          type={typographyProps.types.title14}
          color={colors.base.black}
        >
          JD
        </Typography>
      </RouterLink>
    </div>
  );
};

export { Header };
