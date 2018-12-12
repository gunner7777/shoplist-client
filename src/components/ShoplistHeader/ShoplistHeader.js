import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../lib/Typography';
import GroupButton from '../GroupButton';
import { EditButton, DeleteButton } from '../lib/Button';
import './ShoplistHeader.scss';

const ShoplistHeader = ({ nameList, id, updateForm, deleteShoplist }) => (
  <div className="ShopListHeader Flex">
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
  updateForm: PropTypes.func,
  deleteShoplist: PropTypes.func,
};

export default ShoplistHeader;
