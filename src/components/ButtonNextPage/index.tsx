import './styles.css'

type Props = {
  nameButton: string;
};

export default function ButtonNextPage({nameButton} : Props) {
  return <div className="dsc-btn-next-page">{nameButton}</div>;
}
