import { Icons } from '@/components/icons';

export const renderStartNumber = (number: number): JSX.Element[] => {
    const star = [];
    for (let i = 0; i < number; i++) star.push(<Icons.startOuline key={i} />);
    for (let i = number; i < 5; i++) star.push(<Icons.start key={i} />);
    return star;
};
