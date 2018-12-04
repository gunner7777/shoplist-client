import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../lib/Typography';
import GroupButton from '../GroupButton';
import { EditButton, DeleteButton, CreateButton } from '../lib/Button';
import './ShoplistHeader.scss';

const ShoplistHeader = ({ nameList, id, addForm, updateForm, deleteShoplist }) => (
  <div className="ShopListHeader Flex">
    <CreateButton createItem={addForm} />
    <Typography>{nameList}</Typography>
    <GroupButton shoplistId={id}>
      <EditButton showForm={updateForm} />
      <DeleteButton deleteItem={deleteShoplist} />
    </GroupButton>
  </div>
);

ShoplistHeader.propTypes = {
  nameList: PropTypes.string,
  id: PropTypes.string,
  addForm: PropTypes.func,
  updateForm: PropTypes.func,
  deleteShoplist: PropTypes.func,
};

export default ShoplistHeader;