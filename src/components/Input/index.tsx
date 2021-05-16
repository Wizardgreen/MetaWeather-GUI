import { useCallback, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import {
  StyledInput,
  SelectorWrapper,
  DropdownContainer,
  DropdownItem,
  Cover,
} from "./style";

export default function Input({
  value = "",
  options = [""],
  viewKey = "",
  onChange,
  onSelect,
  loading = false,
}: Props) {
  const [expend, setExpend] = useState(false);

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value;
    onChange(value);
  };

  const handleSelect = (item: any) => {
    onSelect(item);
    setExpend(false);
  };

  const renderList = useCallback(() => {
    const noContent = options.length === 0;
    if (noContent) return <DropdownItem> - No Data - </DropdownItem>;

    return options.map((item, idx) => {
      const viewValue = item[viewKey];
      return (
        <DropdownItem onClick={() => handleSelect(item)} key={viewValue + idx}>
          {viewValue}
        </DropdownItem>
      );
    });
  }, [options, viewKey, onSelect]);

  return (
    <SelectorWrapper>
      <StyledInput
        value={value}
        onChange={handleChange}
        onFocus={() => setExpend(true)}
      />
      {expend && (
        <>
          <Cover onClick={() => setExpend(false)} />
          <DropdownContainer>
            {loading ? <LoadingSpinner /> : renderList()}
          </DropdownContainer>
        </>
      )}
    </SelectorWrapper>
  );
}

interface Props {
  value: string;
  viewKey: string;
  options: any[];
  onChange: (value: string) => void;
  onSelect: (select: any) => void;
  loading: boolean;
}
