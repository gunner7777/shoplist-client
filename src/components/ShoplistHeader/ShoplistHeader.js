import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../lib/Typography';
import GroupButton from '../GroupButton';
import { EditButton, DeleteButton, CreateButton } from '../lib/Button';
import './ShoplistHeader.scss';

const ShoplistHeader = ({ nameList, id, addForm, updateForm }) => (
  <div className="ShopListHeader Flex">
    <CreateButton createItem={addForm} />
    <Typography>{nameList}</Typography>
    <GroupButton shoplistId={id}>
      <EditButton showForm={updateForm} />
      <DeleteButton />
    </GroupButton>
  </div>
);

ShoplistHeader.propTypes = {
  nameList: PropTypes.string,
  id: PropTypes.string,
  addForm: PropTypes.func,
  updateForm: PropTypes.func,
};

export default ShoplistHeader;
