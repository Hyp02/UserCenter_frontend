import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'hyp_用户中心';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '作者-CSDN',
          title: '作者-CSDN',
          href: 'https://blog.csdn.net/TCDHanyongpeng?type=blog',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/>hyp_github</>,
          href: 'https://github.com/Hyp02/',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
