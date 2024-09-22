import { useMemo } from 'react';
import { Table, Card, Form, Pagination, Stack, Image } from 'react-bootstrap';
import dayjs from 'dayjs';
import { useSelection } from '../../../hooks/use-selection';

function noop() {
  // do nothing
}

export function Users({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
}) {
  const rowIds = useMemo(() => {
    return rows.map((customer) => customer.id);
  }, [rows]);

  const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

  const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
  const selectedAll = rows.length > 0 && selected?.size === rows.length;

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      selectAll();
    } else {
      deselectAll();
    }
  };

  const handleSelectOne = (id, event) => {
    if (event.target.checked) {
      selectOne(id);
    } else {
      deselectOne(id);
    }
  };

  return (
    <div className="shadow-lg rounded border">
      <div className="table-responsive rounded">
        <Table hover className="table-hover rounded">
          <thead>
            <tr>
              <th>
                <Form.Check
                  type="checkbox"
                  className='large-checkbox'
                  checked={selectedAll}
                  onChange={handleSelectAll}
                  indeterminate={selectedSome ? 'true' : undefined}
                />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Phone</th>
              <th>Signed Up</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const isSelected = selected?.has(row.id);

              return (
                <tr key={row.id} className={isSelected ? 'table-active' : ''}>
                  <td className='py-3 align-middle'>
                    <Form.Check
                      type="checkbox"
                      checked={isSelected}
                      onChange={(e) => handleSelectOne(row.id, e)}
                      className='large-checkbox'
                    />
                  </td>
                  <td className='align-middle'>
                    <Stack direction="horizontal" gap={2} className="align-items-center">
                      {/* <Image src={row.avatar} roundedCircle width={40} height={40} /> */}
                      <span>{row.name}</span>
                    </Stack>
                  </td>
                  <td className='align-middle'>{row.email}</td>
                  <td className='align-middle'>{`${row.address.city}, ${row.address.state}, ${row.address.country}`}</td>
                  <td className='align-middle'>{row.phone}</td>
                  <td className='align-middle'>{dayjs(row.createdAt).format('MMM D, YYYY')}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <Pagination className="justify-content-end pe-2 pb-3">
        <Pagination.First onClick={noop} />
        <Pagination.Prev onClick={noop} />
        <Pagination.Item>{page + 1}</Pagination.Item>
        <Pagination.Next onClick={noop} />
        <Pagination.Last onClick={noop} />
      </Pagination>
    </div>
  );
}
