<template>
  <div>
      <mt-field type="text" label="用户名" placeholder="请输入用户名" :attr="{maxlength:3}"></mt-field>
      <mt-field type="password" label="密码" placeholder="请输入密码" :attr="{maxlength:10,autocomplete:'off'}" state="warning"></mt-field>

      <mt-field type="password" label="密码" placeholder="请再输入密码" :attr="{maxlength:10,autocomplete:'off'}" state="success"></mt-field>
      
      <mt-field type="password" label="密码" placeholder="请再再输入密码" :attr="{maxlength:10,autocomplete:'off'}" state="error" disableClear></mt-field>
  </div>
</template>